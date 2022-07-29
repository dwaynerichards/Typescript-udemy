A community fork of Faker was made to save the project and they are actively working on some fixes and a fresh v6 release:

You'll then need to update your imports:

import { faker } from "@faker-js/faker";

As of their v6 release, TS support is now native and does not require installing the @types declarations.

The @types/googlemaps has been deprecated. Instead, we install a different library:

npm install @types/google.maps

Sortings dir contains abstract classes, with method implementations and extensions.
