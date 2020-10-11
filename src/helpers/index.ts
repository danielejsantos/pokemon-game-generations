import {
  generationOneImg,
  generationTwoImg,
  generationThreeImg,
  generationFourImg,
  generationFiveImg,
  generationSixImg,
  generationSevenImg,
  generationEightImg
} from '../assets/images';

export function generationsImage(name: string) {
  switch (name) {
    case 'generation-i':
      return generationOneImg;
    case 'generation-ii':
      return generationTwoImg;
    case 'generation-iii':
      return generationThreeImg;
    case 'generation-iv':
      return generationFourImg;
    case 'generation-v':
      return generationFiveImg;
    case 'generation-vi':
      return generationSixImg;
    case 'generation-vii':
      return generationSevenImg;
    case 'generation-viii':
      return generationEightImg;

    default:
      return generationOneImg;
  }
}