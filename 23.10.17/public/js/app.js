import Component from "../js/core/component.js";
import Comment from "../js/src/components/comment.js";

console.log(Component);

class App extends Component {
    setup() {}

    template() {
        return `<div>Header</div>
        <div>
            <div data-component='comment'></div>
        </div>
        <div>Footer</div>`;
    }

    mounted() {
        const commentTarget = document.querySelector(
            `[data-component="comment"]`
        );
        new Comment(commentTarget);
    }

    setEvent() {}
}

export default App;
