import { Injectable } from '@angular/core';
import { ActivityModel } from '../models/activity.model';

@Injectable({
  providedIn: 'root',
})
export class ActivityService {
  //.
  constructor() {}

  outdoorArray: ActivityModel[] = [
    new ActivityModel(
      'Kayaking',
      'Kayak in a kayak',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi dignissimos recusandae obcaecati harum quos, asperiores quisquam pariatur doloribus! Quaerat quos mollitia blanditiis fugit labore perspiciatis eaque corrupti ea dolore autem, est iste dolores ex, optio tenetur recusandae nisi magnam distinctio! Ut corrupti quam, quasi sint iste iure vitae qui amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sed in provident odit saepe praesentium quasi aperiam ab molestias officiis, eius sint. Ut atque, consequuntur nostrum nihil aliquid beatae. In eos adipisci cupiditate quasi enim nisi ea reprehenderit aspernatur laboriosam debitis, nam, et ducimus eum ipsa incidunt aliquid voluptates molestiae.',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi dignissimos recusandae obcaecati harum quos, asperiores quisquam pariatur doloribus! Quaerat quos mollitia blanditiis fugit labore perspiciatis eaque corrupti ea dolore autem, est iste dolores ex, optio tenetur recusandae nisi magnam distinctio! Ut corrupti quam, quasi sint iste iure vitae qui amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sed in provident odit saepe praesentium quasi aperiam ab molestias officiis, eius sint. Ut atque, consequuntur nostrum nihil aliquid beatae. In eos adipisci cupiditate quasi enim nisi ea reprehenderit aspernatur laboriosam debitis, nam, et ducimus eum ipsa incidunt aliquid voluptates molestiae.',
      '/assets/images/kayak.jpg'
    ),
    new ActivityModel(
      'Hill Walking',
      'Climb a hill',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sed in provident odit saepe praesentium quasi aperiam ab molestias officiis, eius sint. Ut atque, consequuntur nostrum nihil aliquid beatae. In eos adipisci cupiditate quasi enim nisi ea reprehenderit aspernatur laboriosam debitis, nam, et ducimus eum ipsa incidunt aliquid voluptates molestiae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi dignissimos recusandae obcaecati harum quos, asperiores quisquam pariatur doloribus! Quaerat quos mollitia blanditiis fugit labore perspiciatis eaque corrupti ea dolore autem, est iste dolores ex, optio tenetur recusandae nisi magnam distinctio! Ut corrupti quam, quasi sint iste iure vitae qui amet.',
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus minus, in deserunt quia, optio doloribus explicabo et sapiente voluptatum velit quaerat culpa error doloremque quisquam ad. Delectus distinctio dolorum aut perspiciatis exercitationem nam repudiandae error aperiam, ratione, ut totam sequi sed velit quidem ex quo consequatur asperiores sint ullam saepe? Mollitia quasi aspernatur facere corrupti magni ullam error distinctio voluptates? Labore dolores nam deleniti corrupti quam! Voluptate suscipit eum quidem dolorum cum a laboriosam perspiciatis aliquid veritatis ipsum odio officiis porro incidunt illum corporis mollitia ratione delectus, necessitatibus expedita facilis sequi ut maxime. Blanditiis placeat voluptatem aperiam rem amet reiciendis?',
      '/assets/images/explore2.jpg'
    ),
  ];
  heritageArray: ActivityModel[] = [
    new ActivityModel(
      'Ancient Church',
      'Visit the old church',
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus minus, in deserunt quia, optio doloribus explicabo et sapiente voluptatum velit quaerat culpa error doloremque quisquam ad. Delectus distinctio dolorum aut perspiciatis exercitationem nam repudiandae error aperiam, ratione, ut totam sequi sed velit quidem ex quo consequatur asperiores sint ullam saepe? Mollitia quasi aspernatur facere corrupti magni ullam error distinctio voluptates? Labore dolores nam deleniti corrupti quam! Voluptate suscipit eum quidem dolorum cum a laboriosam perspiciatis aliquid veritatis ipsum odio officiis porro incidunt illum corporis mollitia ratione delectus, necessitatibus expedita facilis sequi ut maxime. Blanditiis placeat voluptatem aperiam rem amet reiciendis?',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi dignissimos recusandae obcaecati harum quos, asperiores quisquam pariatur doloribus! Quaerat quos mollitia blanditiis fugit labore perspiciatis eaque corrupti ea dolore autem, est iste dolores ex, optio tenetur recusandae nisi magnam distinctio! Ut corrupti quam, quasi sint iste iure vitae qui amet.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sed in provident odit saepe praesentium quasi aperiam ab molestias officiis, eius sint. Ut atque, consequuntur nostrum nihil aliquid beatae. In eos adipisci cupiditate quasi enim nisi ea reprehenderit aspernatur laboriosam debitis, nam, et ducimus eum ipsa incidunt aliquid voluptates molestiae.',
      '/assets/images/church.jpg'
    ),
    new ActivityModel(
      'Monastery',
      'Visit the monastery',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sed in provident odit saepe praesentium quasi aperiam ab molestias officiis, eius sint. Ut atque, consequuntur nostrum nihil aliquid beatae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi dignissimos recusandae obcaecati harum quos, asperiores quisquam pariatur doloribus! Quaerat quos mollitia blanditiis fugit labore perspiciatis eaque corrupti ea dolore autem, est iste dolores ex, optio tenetur recusandae nisi magnam distinctio! Ut corrupti quam, quasi sint iste iure vitae qui amet.In eos adipisci cupiditate quasi enim nisi ea reprehenderit aspernatur laboriosam debitis, nam, et ducimus eum ipsa incidunt aliquid voluptates molestiae.',
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus minus, in deserunt quia, optio doloribus explicabo et sapiente voluptatum velit quaerat culpa error doloremque quisquam ad. Delectus distinctio dolorum aut perspiciatis exercitationem nam repudiandae error aperiam, ratione, ut totam sequi sed velit quidem ex quo consequatur asperiores sint ullam saepe? Mollitia quasi aspernatur facere corrupti magni ullam error distinctio voluptates? Labore dolores nam deleniti corrupti quam! Voluptate suscipit eum quidem dolorum cum a laboriosam perspiciatis aliquid veritatis ipsum odio officiis porro incidunt illum corporis mollitia ratione delectus, necessitatibus expedita facilis sequi ut maxime. Blanditiis placeat voluptatem aperiam rem amet reiciendis?',
      '/assets/images/monastery.jpg'
    ),
  ];
  golfArray: ActivityModel[] = [
    new ActivityModel(
      'Hogs Head',
      'Links Golf Course',
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus minus, in deserunt quia, optio doloribus explicabo et sapiente voluptatum velit quaerat culpa error doloremque quisquam ad. Delectus distinctio dolorum aut perspiciatis exercitationem nam repudiandae error aperiam, ratione, ut totam sequi sed velit quidem ex quo consequatur asperiores sint ullam saepe? Mollitia quasi aspernatur facere corrupti magni ullam error distinctio voluptates? Labore dolores nam deleniti corrupti quam! Voluptate suscipit eum quidem dolorum cum a laboriosam perspiciatis aliquid veritatis ipsum odio officiis porro incidunt illum corporis mollitia ratione delectus, necessitatibus expedita facilis sequi ut maxime. Blanditiis placeat voluptatem aperiam rem amet reiciendis?',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sed in provident odit saepe praesentium quasi aperiam ab molestias officiis, eius sint. Ut atque, Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi dignissimos recusandae obcaecati harum quos, asperiores quisquam pariatur doloribus! Quaerat quos mollitia blanditiis fugit labore perspiciatis eaque corrupti ea dolore autem, est iste dolores ex, optio tenetur recusandae nisi magnam distinctio! Ut corrupti quam, quasi sint iste iure vitae qui amet.consequuntur nostrum nihil aliquid beatae. In eos adipisci cupiditate quasi enim nisi ea reprehenderit aspernatur laboriosam debitis, nam, et ducimus eum ipsa incidunt aliquid voluptates molestiae.',
      '/assets/images/golf.jpg'
    ),
    new ActivityModel(
      'Baile Ui Thaidgh',
      'Ancient Course',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi dignissimos recusandae obcaecati harum quos, asperiores quisquam pariatur doloribus! Quaerat quos mollitia blanditiis fugit labore perspiciatis eaque corrupti ea dolore autem, est iste dolores ex, optio tenetur recusandae nisi magnam distinctio! Ut corrupti quam, quasi sint iste iure vitae qui amet.Dignissimos sed in provident odit saepe praesentium quasi aperiam ab molestias officiis, eius sint. Ut atque, consequuntur nostrum nihil aliquid beatae. In eos adipisci cupiditate quasi enim nisi ea reprehenderit aspernatur laboriosam debitis, nam, et ducimus eum ipsa incidunt aliquid voluptates molestiae.',
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus minus, in deserunt quia, optio doloribus explicabo et sapiente voluptatum velit quaerat culpa error doloremque quisquam ad. Delectus distinctio dolorum aut perspiciatis exercitationem nam repudiandae error aperiam, ratione, ut totam sequi sed velit quidem ex quo consequatur asperiores sint ullam saepe? Mollitia quasi aspernatur facere corrupti magni ullam error distinctio voluptates? Labore dolores nam deleniti corrupti quam! Voluptate suscipit eum quidem dolorum cum a laboriosam perspiciatis aliquid veritatis ipsum odio officiis porro incidunt illum corporis mollitia ratione delectus, necessitatibus expedita facilis sequi ut maxime. Blanditiis placeat voluptatem aperiam rem amet reiciendis?',
      '/assets/images/golf2.jpg'
    ),
  ];
  socialArray: ActivityModel[] = [
    new ActivityModel(
      'Puck Fair',
      'An old Fair',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sed in provident odit saepe praesentium quasi aperiam ab molestias officiis, eius sint. Ut atque, consequuntur nostrum nihil aliquid beatae. In eos adipisci cupiditate quasi enim nisi ea reprehenderit aspernatur laboriosam debitis, nam, et ducimus eum ipsa incidunt aliquid voluptates molestiae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi dignissimos recusandae obcaecati harum quos, asperiores quisquam pariatur doloribus! Quaerat quos mollitia blanditiis fugit labore perspiciatis eaque corrupti ea dolore autem, est iste dolores ex, optio tenetur recusandae nisi magnam distinctio! Ut corrupti quam, quasi sint iste iure vitae qui amet.',
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus minus, in deserunt quia, optio doloribus explicabo et sapiente voluptatum velit quaerat culpa error doloremque quisquam ad. Delectus distinctio dolorum aut perspiciatis exercitationem nam repudiandae error aperiam, ratione, ut totam sequi sed velit quidem ex quo consequatur asperiores sint ullam saepe? Mollitia quasi aspernatur facere corrupti magni ullam error distinctio voluptates? Labore dolores nam deleniti corrupti quam! Voluptate suscipit eum quidem dolorum cum a laboriosam perspiciatis aliquid veritatis ipsum odio officiis porro incidunt illum corporis mollitia ratione delectus, necessitatibus expedita facilis sequi ut maxime. Blanditiis placeat voluptatem aperiam rem amet reiciendis?',
      '/assets/images/monastery.jpg'
    ),
    new ActivityModel(
      'Pattern Day',
      'An gathering of fanatics',
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus minus, in deserunt quia, optio doloribus explicabo et sapiente voluptatum velit quaerat culpa error doloremque quisquam ad. Delectus distinctio dolorum aut perspiciatis exercitationem nam repudiandae error aperiam, ratione, ut totam sequi sed velit quidem ex quo consequatur asperiores sint ullam saepe? Mollitia quasi aspernatur facere corrupti magni ullam error distinctio voluptates? Labore dolores nam deleniti corrupti quam! Voluptate suscipit eum quidem dolorum cum a laboriosam perspiciatis aliquid veritatis ipsum odio officiis porro incidunt illum corporis mollitia ratione delectus, necessitatibus expedita facilis sequi ut maxime. Blanditiis placeat voluptatem aperiam rem amet reiciendis?',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sed in provident odit saepe praesentium quasi aperiam ab molestias officiis, eius sint. Ut atque, Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi dignissimos recusandae obcaecati harum quos, asperiores quisquam pariatur doloribus! Quaerat quos mollitia blanditiis fugit labore perspiciatis eaque corrupti ea dolore autem, est iste dolores ex, optio tenetur recusandae nisi magnam distinctio! Ut corrupti quam, quasi sint iste iure vitae qui amet.consequuntur nostrum nihil aliquid beatae. In eos adipisci cupiditate quasi enim nisi ea reprehenderit aspernatur laboriosam debitis, nam, et ducimus eum ipsa incidunt aliquid voluptates molestiae.',
      '/assets/images/kayak.jpg'
    ),
  ];
  coastalArray: ActivityModel[] = [
    new ActivityModel(
      'Loop Head',
      'Exposed LightHouse',
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus minus, in deserunt quia, optio doloribus explicabo et sapiente voluptatum velit quaerat culpa error doloremque quisquam ad. Delectus distinctio dolorum aut perspiciatis exercitationem nam repudiandae error aperiam, ratione, ut totam sequi sed velit quidem ex quo consequatur asperiores sint ullam saepe? Mollitia quasi aspernatur facere corrupti magni ullam error distinctio voluptates? Labore dolores nam deleniti corrupti quam! Voluptate suscipit eum quidem dolorum cum a laboriosam perspiciatis aliquid veritatis ipsum odio officiis porro incidunt illum corporis mollitia ratione delectus, necessitatibus expedita facilis sequi ut maxime. Blanditiis placeat voluptatem aperiam rem amet reiciendis?',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sed in provident odit saepe praesentium quasi aperiam ab molestias officiis, eius sint. Ut atque, Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi dignissimos recusandae obcaecati harum quos, asperiores quisquam pariatur doloribus! Quaerat quos mollitia blanditiis fugit labore perspiciatis eaque corrupti ea dolore autem, est iste dolores ex, optio tenetur recusandae nisi magnam distinctio! Ut corrupti quam, quasi sint iste iure vitae qui amet.consequuntur nostrum nihil aliquid beatae. In eos adipisci cupiditate quasi enim nisi ea reprehenderit aspernatur laboriosam debitis, nam, et ducimus eum ipsa incidunt aliquid voluptates molestiae.',
      '/assets/images/coast.jpg'
    ),
    new ActivityModel(
      'Vintage Tour',
      'Big Cliffs',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sed in provident odit saepe praesentium quasi aperiam ab molestias officiis, eius sint. Ut atque, consequuntur nostrum nihil aliquid beatae. In eos adipisci cupiditate quasi enim nisi ea reprehenderit aspernatur laboriosam debitis, nam, et ducimus eum ipsa incidunt aliquid voluptates molestiae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi dignissimos recusandae obcaecati harum quos, asperiores quisquam pariatur doloribus! Quaerat quos mollitia blanditiis fugit labore perspiciatis eaque corrupti ea dolore autem, est iste dolores ex, optio tenetur recusandae nisi magnam distinctio! Ut corrupti quam, quasi sint iste iure vitae qui amet.',
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus minus, in deserunt quia, optio doloribus explicabo et sapiente voluptatum velit quaerat culpa error doloremque quisquam ad. Delectus distinctio dolorum aut perspiciatis exercitationem nam repudiandae error aperiam, ratione, ut totam sequi sed velit quidem ex quo consequatur asperiores sint ullam saepe? Mollitia quasi aspernatur facere corrupti magni ullam error distinctio voluptates? Labore dolores nam deleniti corrupti quam! Voluptate suscipit eum quidem dolorum cum a laboriosam perspiciatis aliquid veritatis ipsum odio officiis porro incidunt illum corporis mollitia ratione delectus, necessitatibus expedita facilis sequi ut maxime. Blanditiis placeat voluptatem aperiam rem amet reiciendis?',
      '/assets/images/vintage.jpg'
    ),
  ];

  volcanoArray: ActivityModel[] = [
    new ActivityModel(
      'Big Volcano',
      'A big fiery volcano',
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus minus, in deserunt quia, optio doloribus explicabo et sapiente voluptatum velit quaerat culpa error doloremque quisquam ad. Delectus distinctio dolorum aut perspiciatis exercitationem nam repudiandae error aperiam, ratione, ut totam sequi sed velit quidem ex quo consequatur asperiores sint ullam saepe? Mollitia quasi aspernatur facere corrupti magni ullam error distinctio voluptates? Labore dolores nam deleniti corrupti quam! Voluptate suscipit eum quidem dolorum cum a laboriosam perspiciatis aliquid veritatis ipsum odio officiis porro incidunt illum corporis mollitia ratione delectus, necessitatibus expedita facilis sequi ut maxime. Blanditiis placeat voluptatem aperiam rem amet reiciendis?',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sed in provident odit saepe praesentium quasi aperiam ab molestias officiis, Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi dignissimos recusandae obcaecati harum quos, asperiores quisquam pariatur doloribus! Quaerat quos mollitia blanditiis fugit labore perspiciatis eaque corrupti ea dolore autem, est iste dolores ex, optio tenetur recusandae nisi magnam distinctio! Ut corrupti quam, quasi sint iste iure vitae qui amet.eius sint. Ut atque, consequuntur nostrum nihil aliquid beatae. In eos adipisci cupiditate quasi enim nisi ea reprehenderit aspernatur laboriosam debitis, nam, et ducimus eum ipsa incidunt aliquid voluptates molestiae.',
      '/assets/images/volcano.jpg'
    ),
    new ActivityModel(
      'Hot Springs',
      'Visit Hot Springs',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sed in provident odit saepe praesentium quasi aperiam ab molestias officiis, eius sint. Ut atque, consequuntur nostrum nihil aliquid beatae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi dignissimos recusandae obcaecati harum quos, asperiores quisquam pariatur doloribus! Quaerat quos mollitia blanditiis fugit labore perspiciatis eaque corrupti ea dolore autem, est iste dolores ex, optio tenetur recusandae nisi magnam distinctio! Ut corrupti quam, quasi sint iste iure vitae qui amet.In eos adipisci cupiditate quasi enim nisi ea reprehenderit aspernatur laboriosam debitis, nam, et ducimus eum ipsa incidunt aliquid voluptates molestiae.',
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus minus, in deserunt quia, optio doloribus explicabo et sapiente voluptatum velit quaerat culpa error doloremque quisquam ad. Delectus distinctio dolorum aut perspiciatis exercitationem nam repudiandae error aperiam, ratione, ut totam sequi sed velit quidem ex quo consequatur asperiores sint ullam saepe? Mollitia quasi aspernatur facere corrupti magni ullam error distinctio voluptates? Labore dolores nam deleniti corrupti quam! Voluptate suscipit eum quidem dolorum cum a laboriosam perspiciatis aliquid veritatis ipsum odio officiis porro incidunt illum corporis mollitia ratione delectus, necessitatibus expedita facilis sequi ut maxime. Blanditiis placeat voluptatem aperiam rem amet reiciendis?',
      '/assets/images/springs.jpg'
    ),
  ];

  onRetrieveArray(name: string) {
    if (name === 'outdooractivities') {
      return this.outdoorArray.slice();
    }
    if (name === 'heritage') {
      return this.heritageArray.slice();
    }
    if (name === 'golf') {
      return this.golfArray.slice();
    }
    if (name === 'social') {
      return this.socialArray.slice();
    }
    if (name === 'coastaldrive') {
      return this.coastalArray.slice();
    }
    if (name === 'volcanotour') {
      return this.volcanoArray.slice();
    }
  }
}
