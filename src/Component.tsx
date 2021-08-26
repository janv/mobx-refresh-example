import { observer } from "mobx-react-lite";
import { useState } from "react";

function Component() {
    const [a, setA] =  useState('a')
    // const [b, setB] =  useState('B')
    return <div>
        This is Component
    </div>
}

// export default Component
export default observer(Component)