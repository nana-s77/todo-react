import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("addText").value;
  document.getElementById("addText").value = "";

  // li を生成する
  const listItem = document.createElement("li");
  listItem.className = "listRow";

  // p を生成する
  const listText = document.createElement("p");
  listText.innerText = inputText;

  // 完了ボタンを生成する
  const completeBtn = document.createElement("button");
  completeBtn.className = "actionButton";
  completeBtn.innerText = "完了";
  completeBtn.addEventListener("click", () => {
    // 完了したリストを削除する
    const completeTarget = completeBtn.parentNode;
    deleteFromIncompleteList(completeTarget);
    // 完了したリストのテキストを完了したTODOリストに表示させる
    // liを生成する
    const completeListItem = document.createElement("li");
    completeListItem.className = "listRow";
    // pを生成する
    const completeListText = document.createElement("p");
    completeListText.innerText = listText.textContent;

    // liの中にpを入れる
    completeListItem.appendChild(completeListText);

    // 完了リストに追加
    const completeList = document.getElementById("completeList");
    completeList.appendChild(completeListItem);
    console.log(listText.textContent);
  });

  // 削除ボタンを生成する
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "actionButton";
  deleteBtn.innerText = "削除";

  deleteBtn.addEventListener("click", () => {
    // 押された削除ボタンの親タグ（li）を削除する
    const deleteTarget = deleteBtn.parentNode;
    deleteFromIncompleteList(deleteTarget);
  });

  // liの中にpを入れる
  listItem.appendChild(listText);
  // liの中に完了ボタン入れる
  listItem.appendChild(completeBtn);
  // liの中に削除ボタン入れる
  listItem.appendChild(deleteBtn);

  // 未完了のリストに追加
  const incompleteList = document.getElementById("incompleteList");
  incompleteList.appendChild(listItem);
};

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incompleteList").removeChild(target);
};

document
  .getElementById("addButton")
  .addEventListener("click", () => onClickAdd());
