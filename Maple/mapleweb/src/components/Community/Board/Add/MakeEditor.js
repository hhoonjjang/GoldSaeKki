import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
import { UploadAdapter } from "@ckeditor/ckeditor5-upload/src/filerepository" 

export default function makeEditor(target) {
    return ClassicEditor.create(document.querySelector(target), {
        extraPlugins: [MyCustomUploadAdapterPlugin]
    })
}

function MyCustomUploadAdapterPlugin(editor) {
    editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
        return new UploadAdapter(loader)
    }
}