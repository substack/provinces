# provinces

state and province lists for countries

# completeness

This module currently has states and provinces for:

* United States (US)
* United Kingdom (GB)
* Canada (CA)
* Mexico (MX)
* Australia (AU)
* China (CN)
* Germany (DE)
* Belgium (BE)
* Netherlands (NL)
* Denmark (DK)
* Turkey (TR)
* Indonesia (ID)
* Jordan (JO)
* India (IN)
* Cambodia (KH)
* Ethiopia (ET)
* Peru (PE)
* Cuba (CU)
* Argentina (AR)
* Chile (CL)
* Bolivia (BO)
* Spain (ES)
* Bangladesh (BD)
* Pakistan (PK)
* Nigeria (NG)
* Japan (JP)
* austria (AT)
* brazil (BR)
* Philippines (PH)
* Vietnam (VN)
* Russia (RU)

# methods

``` js
var provinces = require('provinces')
```

Requiring the module gives you an array of object rows.

# data format

Each row consists of:

* row.name - full name of the province or state
* row.country - country abbreviation ([ISO_3166-1_alpha-2 code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2))
* row.short - optional 2 or 3 character short name
* row.alt - optional array of additional names and abbreviations
* row.region - optional region of a country (for example: "Wales")

# install

With [npm](https://npmjs.org) do:

```
npm install provinces
```

# license

MIT
