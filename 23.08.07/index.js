function inner() {
    console.log(3, this);
    const outer = () => {
      console.log(2, this);
      const hello = () => {
        console.log(4, this);
      };
      hello();
    };
    outer();
    return () => {
      console.log(1, this);
    };
  }
  const fn = inner.call({ name: "ingoo" });
  fn();
