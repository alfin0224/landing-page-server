import mongoose from 'mongoose';
import GameCatalogModel from './app/models/gameCatalog.model'; // Update the path accordingly

async function runMigration() {
  try {
    await mongoose.connect('mongodb://localhost:27017/game_store_api', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });

    // Perform schema update here
    await GameCatalogModel.updateMany({}, { description: null }); // Set the default price value for existing documents

    console.log('Migration completed successfully.');
    mongoose.connection.close();
  } catch (error) {
    console.error('Migration failed:', error);
  }
}

runMigration();
