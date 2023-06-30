import React, {useState, useMemo} from 'react';
import { sha256 } from 'js-sha256';


const Memo: React.FC = () => {
    const [input, setInput] = useState('');
    const hash = useMemo(() => sha256(input), [input]);

return (
    <div>
        <label>
            Input:
            <input type='text' value={input} onChange={e => setInput(e.target.value)} />
        </label>
        Hash: {hash}

    </div>
)

}

export default Memo;