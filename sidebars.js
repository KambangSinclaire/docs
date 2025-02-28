module.exports = {
  someSidebar: [
    'overview',
    {
      type: 'link',
      label: 'gRPC API Reference',
      href: 'https://buf.build/authzed/api/docs/main:authzed.api.v1',
    },
    {
      type: 'link',
      label: 'REST API Reference',
      href: 'https://www.postman.com/authzed/workspace/spicedb/overview',
    },
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'guides/first-app',
        'guides/schema',
        'guides/defining-a-subject-type',
        'guides/writing-relationships',
        'guides/validation-and-testing',
        'guides/debugging',
      ],
    },
    {
      type: 'category',
      label: 'SpiceDB',
      collapsed: true,
      items: [
        {
          type: 'link',
          label: 'gRPC API Reference',
          href: 'https://buf.build/authzed/api/docs/main:authzed.api.v1',
        },
        {
          type: 'link',
          label: 'REST API Reference',
          href: 'https://www.postman.com/authzed/workspace/spicedb/overview',
        },
        'spicedb/installing',
        'spicedb/operator',
        'spicedb/feature-overview',
        'spicedb/selecting-a-datastore',
        'spicedb/enabling-watch-api',
        'spicedb/configuring-dispatch',
        'spicedb/updating',
        'spicedb/deploy-on-eks',
        'spicedb/configuration_settings',
      ],
    },
    'spicedb-serverless/overview',
    {
      type: 'category',
      label: 'SpiceDB Dedicated',
      collapsed: true,
      items: [
        'spicedb-dedicated/overview',
        'spicedb-dedicated/fgam',
        'spicedb-dedicated/audit-logging',
        {
          type: 'category',
          label: 'Networking',
          collapsed: true,
          items: ['spicedb-dedicated/networking/aws'],
        },
      ],
    },
    {
      type: 'category',
      label: 'SpiceDB Enterprise',
      collapsed: true,
      items: [
        'spicedb-enterprise/overview',
        'spicedb-enterprise/fgam',
        {
          type: 'category',
          label: 'Releases',
          collapsed: true,
          items: [
            {
              type: 'autogenerated',
              dirName: 'spicedb-enterprise-releases',
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      collapsed: true,
      items: [
        'reference/api',
        'reference/clients',
        'reference/api-consistency',
        'reference/schema-lang',
        'reference/zedtokens-and-zookies',
        'reference/glossary',
        'reference/caveats',
        {
          type: 'link',
          label: 'gRPC API Reference',
          href: 'https://buf.build/authzed/api/docs/main:authzed.api.v1',
        },
        {
          type: 'link',
          label: 'REST API Reference',
          href: 'https://www.postman.com/authzed/workspace/spicedb/overview',
        },
      ],
    },
    'support',
    {
      type: 'link',
      label: 'Talk with an Expert',
      href: 'https://authzed.com/call?utm_source=docs',
    },
  ],
};
