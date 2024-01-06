const heading = React.createElement("div", { id: "main" }, [
    React.createElement("div", { id: "wrapper" }, [
        React.createElement("h1", {}, "This is h1 tag"),
        React.createElement("h2", {}, "This is h2 tag")
    ])
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);