// this here is a demo structure of how recursion works internally in stack calls. how it calls and the function responds to it.

function main() {
  message1();
}

const message1 = () => {
  console.log("hello world1");
  message2();
};

const message2 = () => {
  console.log("hello world2");
  message3();
};

const message3 = () => {
  console.log("hello world3");
  message4();
};

const message4 = () => {
  console.log("hello world4");
  message5();
};

const message5 = () => {
  console.log("hello world5");
};


main();