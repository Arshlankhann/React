function handleClick(event) {
    console.log("Hello!");
    console.log(event);
}
function printBye() {
    console.log("Bye")
}
function dblClick(){
    console.log("You double clicked me !")
}

export default function Button() {
    return (
        <div>
            <button onClick={handleClick}>Click Me!</button>
            <p onMouseOver={printBye}>
                This para is for event Demo Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur rem quia sunt nisi laudantium voluptatibus recusandae perferendis dignissimos pariatur placeat consequuntur accusantium magnam, natus eos cumque dolore, autem id minima?
                Quos dolorem asperiores perspiciatis tempore ad, harum fuga, placeat repudiandae laboriosam in minima nostrum aliquam vero eius totam aliquid. Maxime minus sapiente unde minima pariatur harum iusto enim deserunt voluptatem.
            </p>
            <button onDoubleClick={dblClick}>Double Click</button>
        </div>
    );
}