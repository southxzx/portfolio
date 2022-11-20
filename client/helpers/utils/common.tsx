const rawHtml = (text: string) => {
  if (!text) return "";
  const regexCheckHtml = RegExp("<.+?>", "g").test(text);
  return regexCheckHtml ? (
    <div dangerouslySetInnerHTML={{ __html: text }} />
  ) : (
    text
  );
};

export {
  rawHtml,
}