import React, { useState, useEffect } from "react";
import {
  EditorState,
  convertToRaw,
  ContentState,
  convertFromHTML,
} from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import styles from "./EditorPost.module.css";
export function EditorPost(props: any): JSX.Element {
  let { postcontent, setpostcontent } = props;
  const [content, setContent] = useState(
    EditorState.createWithContent(
      ContentState.createFromBlockArray(convertFromHTML(postcontent.body))
    )
  );
  const onEditorStateChange = (editorState: any) => {
    setContent(editorState); //UPDATE EDITOR STATE AND VALUE
    setpostcontent({
      ...postcontent,
      body: draftToHtml(convertToRaw(editorState.getCurrentContent())), //GET ONLY CONTENT OF THE FORM
    });
 }
 useEffect(() => {
  if(postcontent.loaded === true){
    setContent("");
    setpostcontent({
      ...postcontent,
      loaded:false
    })
  }
 }, [postcontent.loaded])
  return (
    <Editor
      w="90%"
      editorState={content}
      onEditorStateChange={onEditorStateChange}
      wrapperClassName={styles._wrapper}
      editorClassName={styles._editor}
      toolbarClassName={styles._toolbar}
      toolbar={{
        options: [
          "inline",
          "blockType",
          "fontSize",
          "list",
          "textAlign",
          "history",
          "colorPicker",
          "link",
          "embedded",
          "emoji",
          "remove",
        ],
        inline: { inDropdown: true },
        list: { inDropdown: true },
        textAlign: { inDropdown: true },
        link: { inDropdown: true },
        history: { inDropdown: true },
      }}
    />
  );
}
