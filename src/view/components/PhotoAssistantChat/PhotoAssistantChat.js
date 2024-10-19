const template = document.createElement('template')
template.innerHTML = ` 
    <div class="photo-assistant-chat">
      <h2>AI Photo Assistant</h2>
        <h3>Powered by chatGPT</h3>
          <div class="input-output-container">
            <div class="input">
              <form id="chat-form">
                <label for="input">
                  Ask Photo Assistant a question to get photo editing tips:
                </label>
                <textarea id="question-to-photo-assistant" class="question-text" placeholder="Enter a question" required>
                </textarea>
              </form>
            </div>
          </div>
    </div>
  
    <style>

    </style>`

customElements.define('photo-assistant-chat',
  class extends HTMLElement {
    constructor() {
      super()
      this.attachShadow({ mode: 'open' })
      this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
  }
)