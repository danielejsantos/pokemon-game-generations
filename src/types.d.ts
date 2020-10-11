export interface ArrayOfNameUrl {
  name: string;
  url: string;
}

export interface MainProps {
  setGenerationUrl: (value: any) => void;
}

export interface ListProps {
  generationUrl: string;
  setGenerationUrl: (value: any) => void;
  setPokemonUrl: (value: any) => void;
}

export interface PokemonProps {
  pokemonUrl: string;
  setPokemonUrl: (value: any) => void;
}

export interface BackButtonProps {
  back: () => void;
}