import { NextPage } from "next";
import { Editor } from '@tinymce/tinymce-react';
import { SyntheticEvent, useEffect, useRef, useState } from "react";
import KEY from "../../helpers/variables/key";

import styles from "./styles.module.scss";
import { ITag, ITopic } from "../../models/article";
import TopicService from "../../services/topic";

import Multiselect from 'multiselect-react-dropdown';
import TagService from "../../services/tag";
import ArticleService from "../../services/article";

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

  const getTopics = async () => {
    const data = await TopicService.getAllTopics({
      page: 1,
      limit: 10
    });

    if (data.docs.length > 0) {
      setTopics(data.docs);
      setArticleDataSubmit(prev => ({ ...prev, topic: data.docs[0]._id }));
    }
  }

  const getTags = async () => {
    const data = await TagService.getAllTags({
      page: 1,
      limit: 10
    });

    if (data.docs.length > 0) {
      setTags(data.docs);
    }
  }

  const onSelectTags = (selectedList: ITag[]) => {
    setArticleDataSubmit(prev => ({ ...prev, tags: selectedList.map(tag => tag._id) }));
  }

  const onSelectTopic = (e: SyntheticEvent) => {
    const value = (e.target as any).value;
    setArticleDataSubmit(prev => ({ ...prev, topic: value }));
  }

  const onChangeTitle = (e: SyntheticEvent) => {
    const value = (e.target as any).value;
    setArticleDataSubmit(prev => ({ ...prev, title: value }));
  }

  const onRemoveTag = () => {

  }

  const onCreateArticle = async () => {
    if (editorRef.current) {
      const content = ((editorRef.current as any).getContent());
      // setArticleDataSubmit(prev => ({ ...prev, content }));

      await ArticleService.createArticle({
        ...articleDataSubmit,
        content: [content]
      });
    }
  }

  useEffect(() => {
    getTopics();
    getTags();
  }, []);

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
          <button onClick={log}>Log editor content</button>
        </div>
        <div className={styles.controls}>
          <div className={styles.controlBlock}>
            <label className={styles.label}>Title: </label>
            <input type="text" className={styles.inputControl} value={articleDataSubmit.title} onChange={onChangeTitle} />
          </div>
          <div className={styles.controlBlock}>
            <label className={styles.label}>Topic: </label>
            <select value={articleDataSubmit.topic} onChange={onSelectTopic} className={styles.inputControl}>
              {
                topics.map(topic => <option key={topic._id} value={topic._id}>{topic.name}</option>)
              }
            </select>
          </div>
          <div className={styles.controlBlock}>
            <label className={styles.label}>Tag: </label>
            <Multiselect
              options={tags} // Options to display in the dropdown
              selectedValues={articleDataSubmit.tags} // Preselected value to persist in dropdown
              onSelect={onSelectTags} // Function will trigger on select event
              onRemove={onRemoveTag} // Function will trigger on remove event
              displayValue="name" // Property name to display in the dropdown options
            />
          </div>
        </div>
      </div>

      <button onClick={onCreateArticle} className={styles.btnCreate}>Create Article</button>
    </div>
  )
};

export default WritingPage;