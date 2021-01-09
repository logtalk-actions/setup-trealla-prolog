# `setup-trealla-prolog`

This actions sets up a SWI-Prolog environment for use in workflows.

![](https://github.com/logtalk-actions/setup-trealla-prolog/workflows/Test/badge.svg)

## Usage

See [action.yml](action.yml) for the action metadata. The optional `trealla-prolog-branch` input parameter (`master` or `devel`; `devel` by default) allows selecting the branch. The required `trealla-prolog-version` input parameter specifies the version to be installed (`latest` or tag, e.g. `v1.4.7`; default is `latest`).

## Example

```yml
on: push

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - name: Install Trealla ProLog backend
        uses: logtalk-actions/setup-trealla-prolog@master
        with:
          trealla-prolog-branch: devel
          trealla-prolog-version: latest
      - name: Install Logtalk
        uses: logtalk-actions/setup-logtalk@master
        with:
          logtalk-version: latest
      - name: Checkout Logtalk application to be tested
        uses: actions/checkout@v1
      - name: Run all tests in the application directory
        run: logtalk_tester -p trealla
```

## Contributing

Contributions are most welcome. Contributors are expected to uphold the [code of conduct](CODE_OF_CONDUCT.md).

## License

This project is released under the [Apache License 2.0](LICENSE).

## Current Status

This action is in active development. This action only supports Linux at this time.
