import React, { useState } from "react";

import { Link} from 'react-router-dom'

function Fool() {
  return (
    <div>

<h4>You Have Been Sucessfuly Fooled By Your Friend</h4>

<h5>If You Want Fool Your Other Friend  Please Register In Given Link</h5>
      <h4><Link to ="/register">Register</Link></h4>
    </div>
  );
}

export default Fool;