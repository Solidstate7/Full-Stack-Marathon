import Component from "../../core/component.js";

class CommentList extends Component {
    setup() {
        this.state = {
            updated: null,
        };
    }
    template() {
        const items = this.props.comments.map(
            (item) => `
        <ul class="comment-row" data-index="${item.id}">
        <li>${item.userid}</li>
        <li>
            <span class="comment-content" data-id="${
                item.id
            }">${this.commentContent(item)}</span>
            <span class="comment-delete" data-id="${item.id}">❤️</span>
        </li>
        <li>${item.date}</li>
    </ul>
    `
        );

        return items.join("");
    }
    mounted() {}

    commentContent(item) {
        const { id, content } = item;
        // id this.state.updated -> 조건부 렌더링
        const isUpdated = id === parseInt(this.state.updated);
        if (isUpdated) {
            return `<input type='text' class='comment-update-input' value='${content}'`;
        }
        return content;
    }

    delete(e) {
        // console.log(e.target.dataset);
        const { dataset } = e.target;
        const id = parseInt(dataset.id);
        console.log(id);
        this.props.deleteItem(id);
    }
    changeInput(e) {
        const { id } = e.target.dataset;
        if (!id) return;
        this.setState({ updated: parseInt(id) });
    }
    enter(e) {
        if (e.keyCode !== 13) return;
        const id = this.state.updated;
        const { value: content } = e.target;
        this.props.updateItem(id, content);
        // this.setState({ updated: null });
    }

    setEvent() {
        this.addEvent("click", ".comment-delete", this.delete.bind(this));

        this.addEvent("click", ".comment-content", this.changeInput.bind(this));

        this.addEvent(
            "keydown",
            ".comment-update-input",
            this.enter.bind(this)
        );
    }
}

export default CommentList;
