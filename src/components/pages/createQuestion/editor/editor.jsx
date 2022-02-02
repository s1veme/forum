import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import axios from "axios";
import propTypes from "prop-types";

function MyEditor({ handleChange, ...props }) {
  function uploadAdapter(loader) {
    return {
      upload: () => {
        return new Promise((resolve, reject) => {
          loader.file.then((file) => {
            const body = new FormData();
            body.append("files", file);
            axios
              .post(`http://127.0.0.1:8000/ckeditor/upload/ `, body, {
                headers: {
                  "Content-type": "multipart/form-data",
                },
              })
              .then((res) => {
                resolve({
                  default: res.url,
                });
              })
              .catch((err) => {
                reject(err);
              });
          });
        });
      },
    };
  }
  function uploadPlugin(editor) {
    editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
      return uploadAdapter(loader);
    };
  }
  return (
    <div className="App">
      <CKEditor
        config={{
          extraPlugins: [uploadPlugin],
        }}
        editor={ClassicEditor}
        onReady={(editor) => {}}
        onBlur={(event, editor) => {}}
        onFocus={(event, editor) => {}}
        onChange={(event, editor) => {
          handleChange(editor.getData());
        }}
        {...props}
      />
    </div>
  );
}

MyEditor.propTypes = {
  handleChange: propTypes.func,
};
export default MyEditor;
