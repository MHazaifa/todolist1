

const Additems = () => {
  return (
    <div>
      <h2 style={{ margin: "5px" }}>My To Do List</h2>
      <input type="text" id="myInput" placeholder="Title..." />
      <span onclick="newElement()" class="addBtn">
        Add
      </span>
    </div>
  );
};

export default Additems;
