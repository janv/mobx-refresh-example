import { observer } from "mobx-react-lite";
import { useState } from "react";

function TSComponent() {
    const [a, setA] =  useState('a')
    // const [b, setB] =  useState('B')
    return <div>
        This is TS Component
    </div>
}

// export default TSComponent
export default observer(TSComponent)