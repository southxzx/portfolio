import { NextPage } from "next";
import { Editor } from '@tinymce/tinymce-react';
import { useRef, useState } from "react";
import KEY from "../../helpers/variables/key";

import styles from "./styles.module.scss";
import Select from "../../components/writing/select";
import { ITag, ITopic } from "../../models/article";

type IArticleDataSubmit = {
  title: string;
  content: string[];
  tags: string[];
  topic: string;
}

const WritingPage: NextPage = () => {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log((editorRef.current as any).getContent());
    }
  };

  const [articleDataSubmit, setArticleDataSubmit] = useState<IArticleDataSubmit>({
    title: "",
    content: [],
    topic: "",
    tags: [],
  });
  const [topics, setTopics] = useState<ITopic[]>([]);
  const [tags, setTags] = useState<ITag[]>([]);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.editor}>
          <Editor
            apiKey={KEY.TINY_MCE}
            onInit={(evt, editor) => (editorRef.current as any) = editor}
            initialValue="<p>This is the initial content of the editor.</p>"
            init={{
              height: 500,
              menubar: false,
              plugins: [
                'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
              ],
              toolbar: 'undo redo | blocks | ' +
                'bold italic forecolor | alignleft aligncenter ' +
                'alignright alignjustify | bullist numlist outdent indent | ' +
                'removeformat | help',
              content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
            }}
          />
          {/* <button onClick={log}>Log editor content</button> */}
        </div>
        <div className={styles.controls}>
          {/* <Select /> */}
          <div>
            <label>Topic</label>
            <select value={articleDataSubmit.topic}>
              {
                topics.map(topic => <option key={topic.id} value={topic.id}>{topic.name}</option>)
              }
            </select>
          </div>
        </div>
      </div>

      <button className={styles.btnCreate}>Create Article</button>
    </div>
  )
};

export default WritingPage;