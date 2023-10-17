import Component from "../../core/component.js";

class CommentForm extends Component {
    setup() {}
    template() {
        const { length } = this.props;
        return `                
        <h4>
            댓글 쓰기
            <span>(${length})</span>
        </h4>
        <form id="commentFrm" class="commentFrm">
            <span class="ps_box">
                <input type="text" placeholder="댓글 입력" id="form_input"/>
            </span>
            <button class="btn">등록</button>
        </form>
        `;
    }
    mounted() {
        // document
        //     .querySelector("#commentFrm")
        //     .addEventListener("submit", (e) => {
        //         e.preventDefault();
        //         console.log("이벤트 등록이 되나?");
        //     });
    }
    handleSubmit(e) {
        e.preventDefault();
        console.log("submit 발동~", this.props.insertItem);
        const formInput = document.querySelector("#form_input").value;
        this.props.insertItem(formInput);
    }
    setEvent() {
        const handleSubmit = this.handleSubmit.bind(this);
        this.addEvent("submit", "#commentFrm", handleSubmit);
        // eventlistener doesn't work before being rendered
    }
}

export default CommentForm;
