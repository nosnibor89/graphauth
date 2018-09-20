import React from 'react';
import requireAuth from '../HOC/requireAuth';

export default requireAuth(() => {
    return <div>You're logged in.</div>
});