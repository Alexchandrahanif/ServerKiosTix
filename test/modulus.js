function ModulusStr(int) {
  for (let i = 0; i <= int; i++) {
    let output = "";

    if (i % 25 === 0) {
      output += "KI";
    }

    if (i % 40 === 0) {
      output += "OS";
    }

    if (i % 60 === 0) {
      output += "TIK";
    }

    if (i % 99 === 0) {
      output = "KIOSTIX";
    }

    if (output === "") {
      console.log(i);
    } else {
      console.log(output);
    }
  }
}

ModulusStr(100);
