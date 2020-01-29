import React from 'react';

export default function StrictMode() {
    return (
        <div className="StrictExample">
            <p>The following component works normally:</p>
            <p>But the one below this puts a warning in the console:</p>
        </div>
    );
}