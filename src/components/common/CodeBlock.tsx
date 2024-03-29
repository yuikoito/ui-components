import { useEffect } from "react";
import useToggle from "hooks/useToggle";
import { styleModel } from "models/styleModel";
import Modal from "./Modal";
import hljs from "highlight.js";
import scss from "highlight.js/lib/languages/scss";
import "highlight.js/styles/atom-one-dark.css";
import "styles/components/common/code-block-container.scss";
import "styles/styles.scss";

hljs.registerLanguage("scss", scss);

type Props = {
  style: styleModel;
};

const CodeBlock = ({ style }: Props) => {
  useEffect(() => {
    hljs.highlightAll();
  });

  const { isOpen, clickHandler } = useToggle();
  const copyText = (scss: string) => {
    const element = document.createElement("textarea");
    element.value = scss;
    document.body.appendChild(element);
    element.select();
    document.execCommand("copy");
    document.body.removeChild(element);
    alert("Copied!");
  };
  const stopPropagation = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
  };
  return (
    <div className="code-block-container" onClick={clickHandler}>
      {(style.title.indexOf("loader") !== -1 ||
        style.title.indexOf("arrow") !== -1) && (
        <div className={style.title}></div>
      )}
      {style.title.indexOf("button") !== -1 && (
        <button className={style.title}>Hover me!</button>
      )}
      {style.title.indexOf("input") !== -1 && (
        <div className={style.title}>
          <input onClick={stopPropagation} type="text" />
          <label>Name</label>
        </div>
      )}
      {style.title.indexOf("text") !== -1 && (
        <div className={style.title}>
          <span>H</span>
          <span>e</span>
          <span>l</span>
          <span>l</span>
          <span>o</span>
        </div>
      )}
      {style.title.indexOf("bubble") !== -1 && (
        <div className={style.title}>
          <p>Hello World!</p>
        </div>
      )}
      {isOpen && (
        <Modal closeModal={clickHandler} copyText={() => copyText(style.scss)}>
          <div onClick={stopPropagation} className="inbox">
            {(style.title.indexOf("loader") !== -1 ||
              style.title.indexOf("arrow") !== -1) && (
              <code className="html">
                &lt;div class="{style.title}"&gt;&lt;/div&gt;
              </code>
            )}
            {style.title.indexOf("button") !== -1 && (
              <code className="html">
                &lt;button class="{style.title}"&gt;Hover me!&lt;/button&gt;
              </code>
            )}
            {style.title.indexOf("input") !== -1 && (
              <code className="html">
                &lt;div class={style.title}&gt;
                <br />
                &nbsp; &lt;input type="text" /&gt;
                <br /> &nbsp; &lt;label&gt;Name&lt;/label&gt;
                <br /> &lt;/div&gt;
              </code>
            )}
            {style.title.indexOf("text") !== -1 && (
              <code className="html">
                &lt;div class="{style.title}"&gt;
                <br />
                &nbsp; &lt;span&gt;H&lt;/span&gt;
                <br />
                &nbsp; &lt;span&gt;e&lt;/span&gt;
                <br />
                &nbsp; &lt;span&gt;l&lt;/span&gt;
                <br />
                &nbsp; &lt;span&gt;l&lt;/span&gt;
                <br />
                &nbsp; &lt;span&gt;o&lt;/span&gt; <br />
                &lt;/div&gt;
              </code>
            )}
            {style.title.indexOf("bubble") !== -1 && (
              <code className="html">
                &lt;div class="{style.title}"&gt;
                <br />
                &nbsp; &lt;p&gt;Hello World!&lt;/p&gt;
                <br />
                &lt;/div&gt;
              </code>
            )}
            <pre className="code">
              <code className="scss">{style.scss}</code>
            </pre>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default CodeBlock;
