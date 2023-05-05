import React, { useState } from "react";
import Pizza from "./components/Pizza";
import Cart from "./components/Cart";
import ExpandableText from "./components/ExpandableText";

const App = () => {
    const [game, setGame] = useState({
        id: 1,
        player: {
            name: "John",
        },
    });

    const handleClick = () => {
        setGame({ ...game, player: { ...game.player, name: "Bob" } });
    };

    return (
        <>
            <div>App</div>
            <button onClick={handleClick}>
                {game.id} {game.player.name}
            </button>
            <Pizza />
            <Cart />
            <ExpandableText maxChars={100}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis
                ex dignissimos rerum. Culpa numquam repudiandae earum eius non
                voluptates animi dolore odit nesciunt in iure, doloribus
                aspernatur ipsa odio beatae labore et natus quibusdam ratione
                molestiae cupiditate? Exercitationem adipisci quia corporis sint
                nemo, sunt distinctio voluptatem esse cupiditate explicabo
                molestiae alias necessitatibus neque vitae, illo numquam ratione
                odio. Inventore dolore perferendis iure. Odit mollitia molestiae
                alias esse nobis soluta unde asperiores, quis consequuntur vero
                consequatur saepe. Adipisci culpa ratione tenetur. Id odio optio
                praesentium numquam quia. Quae blanditiis voluptatibus vel sint
                aliquam quidem, nihil delectus dolorem provident unde ad sunt.
            </ExpandableText>
            <ExpandableText>Hello world</ExpandableText>
        </>
    );
};

export default App;

// import MyButton from "./components/MyButton";
// import Alert from "./components/Alert";
// import LikeButton from "./components/LikeButton";
// import { useState } from "react";

// function App() {
//     const clickHandler = () => {
//         setShowAlert(true);
//         console.log("From App.tsx: Hello!");
//     };

//     const alertDismissHandler = () => {
//         setShowAlert(false);
//     };

//     const [showAlert, setShowAlert] = useState(false);

//     const likeHandler = () => {
//         console.log("From App.tsx: like button clicked!!");
//     };

//     return (
//         <div>
//             <LikeButton onClick={likeHandler} />
//             {showAlert && (
//                 <Alert onDismiss={alertDismissHandler}>My Alert!</Alert>
//             )}
//             <MyButton color="danger" onClick={clickHandler}>
//                 My Button
//             </MyButton>
//         </div>
//     );
// }

// export default App;
