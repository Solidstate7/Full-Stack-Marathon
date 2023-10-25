import Component from "../../core/component.js";
import CommentForm from "../contents/comment/form.js";
import CommentList from "../contents/comment/item.js";

class Comment extends Component {
    setup() {
        this.state = {
            comments: [
                { id: 1, userid: "eunjae", content: "hi", date: "2023-10-17" },
                { id: 2, userid: "eunjae", content: "hi2", date: "2023-10-17" },
                { id: 3, userid: "eunjae", content: "hi3", date: "2023-10-17" },
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
        const { comments } = this.state;
        const id =
            comments.length !== 0 ? comments[comments.length - 1].id + 1 : 1;

        comments.push({
            id,
            userid: "eunjae",
            content: content,
            date: "2023-10-17",
        });

        const newState = [...comments];

        this.setState({ ...this.state, comments: [...newState] });
    }

    deleteItem(id) {
        const { comments } = this.state;
        const newState = comments.filter((v) => v.id !== id);
        this.setState({ ...this.state, comments: [...newState] });
    }

    updateItem(id, content) {
        const { comments } = this.state;
        const newState = [...comments];

        // let find;
        // for (let i=0; i<newState.length; i++) {
        //     if(newState[i].id === id) {
        //         find = i
        //     }
        // }

        const index = newState.findIndex((v) => v.id === parseInt(id));
        newState[index].content = content;
        this.setState({ ...this.state, comments: [...newState] });
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
        const deleteItem = this.deleteItem.bind(this);
        const updateItem = this.updateItem.bind(this);
        new CommentList(listTarget, { comments, deleteItem, updateItem });
    }
    setEvent() {}
}

export default Comment;
