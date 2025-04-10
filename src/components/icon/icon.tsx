import { Loading } from './icons/loading';
import { User } from './icons/user';

interface IIcon extends React.SVGAttributes<SVGAElement> {
  icon: keyof typeof icons;
}

const icons = {
  user: <User />,
  loading: <Loading />,
};

export const Icon = ({ icon }: IIcon) => {
  return icons[icon];
};
