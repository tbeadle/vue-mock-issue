# mock_issue

A Vue.js project to demonstrate an issue with vue-test-utils.
This demonstrates that the $route property can not be mocked with
vue-test-utils. The following error is generated by the call to `mount` when
running `yarn run unit`:

```
setting a property that has only a getter
```

If the `mocks` line is removed from the call to `mount` in
`test/unit/Hello.spec.js`, then that call succeeds. The test still fails,
however, because `wrapper.$route` is undefined.

---

Running `yarn run dev` will start up the dev instance of the app and display the
`$route.path` in the view.
