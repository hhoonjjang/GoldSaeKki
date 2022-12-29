import _ from "lodash";

import Plugin from "@ckeditor/ckeditor5-core/src/plugin";
import imageIcon from "@ckeditor/ckeditor5-core/theme/icons/image.svg";
import FileDialogButtonView from "@ckeditor/ckeditor5-upload/src/ui/filedialogbuttonview";
import FileRepository from "@ckeditor/ckeditor5-upload/src/filerepository";
import Notification from "@ckeditor/ckeditor5-ui/src/notification/notification";
import Command from "@ckeditor/ckeditor5-core/src/command";
import { findOptimalInsertionPosition } from '@ckeditor/ckeditor5-widget/src/utils';

const _UPLOAD_FILE_LIMIT = 50000000;

const createImageTypeRegExp = (types) => {
  // Sanitize the MIME type name which may include: "+", "-" or ".".
  const regExpSafeNames = types.map((type) => type.replace("+", "\\+"));

  return new RegExp(`^image\\/(${regExpSafeNames.join("|")})$`);
};

class FileUploadCommand extends Command {
  /**
   * Executes the command.
   *
   * @fires execute
   * @param {Object} options Options for the executed command.
   * @param {File|Array.<File>} options.file The image file or an array of image files to upload.
   */
  //fileUpload command를 받으면 execute함수가 실행 됨.
  execute(options) {
    const editor = this.editor;
    const model = editor.model;
	
    //File Repository 가져옮
    const fileRepository = editor.plugins.get(FileRepository);
    const notification = editor.plugins.get(Notification);

    model.change((writer) => {
      const filesToUpload = Array.isArray(options.file)
        ? options.file
        : [options.file];

      for (const file of filesToUpload) {
        console.log(file);
        if (file.size > _UPLOAD_FILE_LIMIT) {
          //50mb이상 파일일 때 notification 보냄
          notification.showWarning("Can not upload files larger than 50MB");
          return;
        }
        uploadFile(writer, model, fileRepository, file);
      }
    });
  }
}

// Handles uploading single file.
//
// @param {module:engine/model/writer~writer} writer
// @param {module:engine/model/model~Model} model
// @param {File} file
function uploadFile(writer, model, fileRepository, file) {
  //파일 별 loader instance를 생성 함.
  const loader = fileRepository.createLoader(file);

  if (!loader) {
    return;
  }

  //loader가 file를 disk에서 read() 후 upload()로 server에 전송 함.
  loader
    .read()
    .then(() => loader.upload())
    .then((data) => {
      const attributes = {
        linkHref: data.default,
        titleTarget: data.editor ? data.editor : ""
      }

      console.log(data.default);

	  //server에 return된 정보로 <a> tag로 되어 있는 file element를 생성 함.
      const fileElement = writer.createText(file.name, attributes);

      const insertAtSelection = findOptimalInsertionPosition(
        model.document.selection,
        model
      );
	  
      //editor에 <a> tag로 되어 있는 file element를 삽입 함.
      model.insertContent(fileElement, insertAtSelection);
    });
}

class Uploader extends Plugin {
  init() {
    const editor = this.editor;
    //fileUpload command에 위에서 구현한 FileUploadCommand를 연동 시킴
    editor.commands.add("fileUpload", new FileUploadCommand(editor));

    editor.ui.componentFactory.add("insertFileAndImage", (locale) => {
      const view = new FileDialogButtonView(locale);
      const imageTypes = editor.config.get("image.upload.types");
      const imageTypesRegExp = createImageTypeRegExp(imageTypes);

      view.buttonView.set({
        label: "Insert image and file",
        icon: imageIcon,
        tooltip: true,
      });

	  //사용자가 upload할 file/image를 선택 시 done event가 발생함.
      view.on("done", (evt, files) => {
        const [imagesToUpload, filesToUpload] = _.partition(files, (file) =>
          imageTypesRegExp.test(file.type)
        );

        if (imagesToUpload.length) {
          editor.execute("imageUpload", { file: imagesToUpload });
        }

        if (filesToUpload.length) {
          editor.execute("fileUpload", { file: filesToUpload });
        }
      });

      return view;
    });
  }
}

export default Uploader;