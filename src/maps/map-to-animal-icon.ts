import { ReactComponent as GiraphIcon } from 'assets/img/giraffe.svg';
import { ReactComponent as HippoIcon } from 'assets/img/hippopotamus.svg';
import { ReactComponent as WolfIcon } from 'assets/img/wolf.svg';
import { AnimalKind } from 'consts/enums';

const mapToAnimalIcon = {
  [AnimalKind.Giraph]: GiraphIcon,
  [AnimalKind.Hippo]: HippoIcon,
  [AnimalKind.Wolf]: WolfIcon,
};

export { mapToAnimalIcon };
