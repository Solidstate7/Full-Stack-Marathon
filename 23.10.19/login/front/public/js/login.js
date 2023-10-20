console.log("this is a login page");

document.addEventListener("DOMContentLoaded", () => {
    console.log("hello world");
    console.log(axios);

    const frm = document.querySelector("form");
    frm.addEventListener("submit", async (e) => {
        e.preventDefault();
        console.log("submit");
        const {
            userid: { value: userid },
            userpw: { value: userpw },
        } = e.target;
        console.dir(e.target);
        console.log(userid, userpw);

        try {
            const { data } = await axios.post("http://localhost:4000/login", {
                userid,
                userpw,
            });
            console.log(data);
        } catch (e) {
            throw new Error(e);
        }
    });
});
