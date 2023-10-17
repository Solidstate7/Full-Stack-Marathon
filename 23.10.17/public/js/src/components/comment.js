import Component from "../../core/component.js";
import CommentForm from "../contents/form.js";
import CommentList from "../contents/item.js";

class Comment extends Component {
    setup() {
        this.state = {
            comments: [
                { id: 1, userid: "eunjae", content: "hi", date: "2023-10-17" },
                { id: 1, userid: "eunjae", content: "hi2", date: "2023-10-17" },
                { id: 1, userid: "eunjae", content: "hi3", date: "2023-10-17" },
            ],
        };
    }
    template() {
        return `<ul class="comment">
        <li class="comment-form">
        </li>
        <li class="comment-list">
        </li>
    </ul>`;
    }

    insertItem(content) {
        const newState = this.state.comments.push({
            id: 4,
            userid: "eunjae",
            content: content,
            date: "2023-10-17",
        });
        this.setState({ ...this.state, ...newState });
    }

    mounted() {
        const { comments } = this.state;
        const formTarget = document.querySelector(".comment-form");
        const insertItem = this.insertItem.bind(this);
        new CommentForm(formTarget, {
            length: comments.length,
            insertItem,
        });

        const listTarget = document.querySelector(".comment-list");
        new CommentList(listTarget, { comments });
    }
    setEvent() {}
}

export default Comment;
