import React from "react";

const HookuseCustomHook = () => {
    return (<>
    <div className="container border border-success text-center">
        <p>

            Custom Hooks
            Custom hooks are JavaScript functions that use other hooks. They help share stateful logic that we may otherwise need to reuse throughout our application. For example, we may create custom hooks for commonly used effects such as form handling, animations, timers, etc.

            As a convention, custom hooks should have names that start with use. Additionally, they should also follow the rules of hooks. Otherwise, they don’t need to have a specific design — the developer gets to decide what arguments it takes, and if it should return anything.
            </p>
        <section>
           <p> Use of Custom HooksCustom hooks have many benefits. They:</p>
            <ul>
                <li>Allow code to be abstracted</li>
                <li>Hide complex logic</li>
                <li>Allow stateful logic to be reused between multiple components</li>
            </ul>
        </section>
</div>
    </>)
}

module.exports = HookuseCustomHook;
