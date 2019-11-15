import { IRequest } from 'Utils/request';

type AlbumAPIResponse = {
  title: string
  artist?: {
    name: string
    bio?: string
    previousAlbums?: string[]
  }
};

declare const album: AlbumAPIResponse;

// With optional chaining, you can write
// code like this:

const artistBio = album?.artist?.bio;

// Instead of:

const maybeArtistBio = album.artist && album.artist.bio;

// In this case ?. acts differently than the &&s since &&
// will act differently on "falsy" values (e.g. an empty string,
// 0, NaN, and, well, false).

// Optional chaining will only take null or undefined as
// a signal to stop and return an undefined.

// Optional Element Access

// Property access is via the . operator, the optional chaining
// also works with the [] operators when accessing elements.

const maybeArtistBioElement = album?.["artist"]?.["bio"];

const maybeFirstPreviousAlbum = album?.artist?.previousAlbums?.[0];

// This class handles all of the things that all services would need
export abstract class Service {
  // It is okay to use inference here and not type each property
  protected abstract path = '/';

  public constructor(protected request: IRequest) {}
}
