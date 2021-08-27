import { observer } from "mobx-react-lite";
import { useState } from "react";

function JSComponent() {
    const [a, setA] =  useState('a')
    // const [b, setB] =  useState('B')
    return <div>
        This is JS Component
    </div>
}

// export default JSComponent
export default observer(JSComponent)