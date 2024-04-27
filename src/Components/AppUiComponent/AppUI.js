import "../AppUiComponent/styles.css";

export default function AppUI() {
  return (
    <body>
      <main className="app-container">
        <header className="hero-banner">
          <h1 className="title">Pocket Translator</h1>
        </header>
        <div className="input-container">
          <h2 className="lang">Text to translate 👇</h2>
          <textarea
            id="myTextarea"
            name="textarea"
            rows={4}
            cols={50}
            placeholder="Enter your text here.."
            className="textArea"
          ></textarea>
          <h3 className="lang">Select your language 👇</h3>
          <div className="options1">
            <input
              type="radio"
              id="option1"
              name="language"
              value="French"
              defaultChecked
            />
            <label htmlFor="option1">French</label>
            <img
              src="/images/frenchFlag.png"
              alt="French Flag"
              width="25"
              height="15"
              className="flag"
            />
          </div>
          <div className="options2">
            <input type="radio" id="option2" name="language" value="Japanese" />
            <label htmlFor="option2">Japanese</label>
            <img
              src="/images/japFlag.png"
              alt="Japanese Flag"
              width="25"
              height="15"
              className="flag"
            />
          </div>
          <div className="options3">
            <input type="radio" id="option3" name="language" value="Spanish" />
            <label htmlFor="option3">Spanish</label>
            <img
              src="/images/download.png"
              alt="Spanish Flag"
              width="25"
              height="15"
              className="flag"
            />
          </div>
          <button className="translate-button">Translate</button>
        </div>
      </main>
    </body>
  );
}
