// 레디 이벤트
$(() => {
  $("#resetResult").click();
  setNumberSelect();
  $(".changeNumber").click(function() {
    const id = $(this).attr("id");
    changeNumber(id.replace("n", ""));
  });
  setMajor();
  setMinor();
  $(".changeCard").click(function () {
    const id = $(this).attr("id");
    changeResult(id);
  });
});

const setNumberSelect = () => {
  let appendHtml;
  for (let i = 1; i <= 4; i++) {
    appendHtml = "<button id='n";
    appendHtml += i;
    appendHtml += "' class='changeNumber'>";
    appendHtml += i;
    appendHtml += "</button>&nbsp;";
    $("#numberSelect").append(appendHtml);
  }
};

const setMajor = () => {
  let index;
  let appendHtml;
  for (let i = 0; i <= 21; i++) {
    index = "";
    if (i < 10) {
      index += "0";
    }
    index += i;
    appendHtml = "<button id='m";
    appendHtml += index;
    appendHtml += "' class='changeCard'>";
    appendHtml += index;
    appendHtml += "</button>&nbsp;";
    $("#major").append(appendHtml);
  }
};

const setMinor = () => {
  const suits = ["swords", "cups", "pentacles", "wands"];
  const header = ["s", "c", "p", "w"];
  let index;
  let output;
  for (let j in suits) {
    for (let i = 1; i <= 14; i++) {
      index = "";
      if (i < 10) {
        index += "0";
      }
      index += i;

      output = index;
      if (i === 1) {
        output = "ACE";
      } else if (i === 11) {
        output = "PAGE";
      } else if (i === 12) {
        output = "KNIGHT";
      } else if (i === 13) {
        output = "QUEEN";
      } else if (i === 14) {
        output = "KING";
      }
      appendHtml = "<button id='";
      appendHtml += header[j];
      appendHtml += index;
      appendHtml += "' class='changeCard'>";
      appendHtml += output;
      appendHtml += "</button>&nbsp;";
      $("#" + suits[j]).append(appendHtml);
    }
  }
};

const changeNumber = (number) => {
  $("#number").text(number);
};

$("#resetNumber").click(() => {
  changeNumber("?");
});

const changeResult = (fileName) => {
  let filePath = "./resources/img/";
  filePath += fileName;
  filePath += ".jpg";
  $("#result").prop("src", filePath);
};

$("#resetResult").click(() => {
  changeResult("b");
});