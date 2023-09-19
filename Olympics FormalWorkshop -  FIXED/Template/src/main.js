import { TaskRunner } from './providers/task-runner.js';
import { boxingCategory } from './common/boxing-category.enum.js';

const main = () => {
  try {
    const results = [
      TaskRunner.listOlympians(),
      TaskRunner.createBoxer('Wladimir', 'Klitschko', 'Ukraine', boxingCategory.Heavyweight, 64, 5),
      TaskRunner.createBoxer('Anthony', 'Joshua', 'UK', boxingCategory.Heavyweight, 19, 0),
      TaskRunner.listOlympians('firstname'),
      TaskRunner.createSprinter('Usain', 'Bolt', 'Jamaica', new Map([['100', 9.58], ['200', 19.19]])),
      TaskRunner.listOlympians('lastname', 'desc'),
      TaskRunner.createSprinter('Asaffa', 'Powell', 'Jamaica', new Map([['100', 9.72], ['200', 19.9]])),
      TaskRunner.listOlympians(),
    ];

    console.log(results.join('\n\n'));
  } catch (error) {
    console.log(error);
  }
};

main();
