import mongoose from 'mongoose';

import * as config from '../config';

mongoose.connect(config.MONGODB_URL);

export default mongoose;