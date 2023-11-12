import { render } from "preact"

import App from "./App"


const body = document.querySelector("body")
const root = document.createElement("div")

root.id = "root"

body?.appendChild(root)

render(App, root)



