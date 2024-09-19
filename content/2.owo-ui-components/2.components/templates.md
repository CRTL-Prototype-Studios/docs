---
title: Templates
description: "The special Template Component."
category: owo-ui
---

::alert{type="warning" icon='i-heroicons-exclamation-triangle'}
Do keep in mind, at least, in my (_[Type-32](https://github.com/Type-32)_) experience, that the templates feature is not accessible in a code-driven form. If it is,
please open up a pull-request and help us write the code-driven documentation for the template feature.
::

## Template Basics

The `template` tag allows you to define reusable components that can be inserted into your UI at different places. Templates are defined within the `templates` section of your owo-ui XML file and can be expanded and added to your UI using the `expandTemplate` method.

Templates can be referenced within the same file.

### Instantiation

In some cases you might need a list of custom components with buttons and a text. Referencing templates across files are easy,
provided with this simple identifier syntax: `<template-name>@<mod-resource-namespace>:<mod-file-name>.xml`

If you have decided to categorize your files by putting them into different directories for organizational purposes, you
can use the similar syntax: `<template-name>@<mod-resource-namespace>:<mod-directories>/<mod-file-name>.xml`

#### Examples

```dir
-- assets
  -- examplemod
    -- owo_ui
      -- ui_components
        -- templates
          -- example_template.xml
      -- example_template.xml
```

The corresponding template identifiers for the templates in both files are: `my-template@examplemod:example_template.xml`, `my-template@examplemod:ui_components/templates/example_template.xml`

## Parameters

::field{name='name' type='string' required}
The name of the template, which is used to reference it when expanding the template.
::

### Example Template

```xml [.../my-namespace/owo-ui/example_ui.xml]
<owo-ui xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:noNamespaceSchemaLocation="https://raw.githubusercontent.com/wisp-forest/owo-lib/1.20/owo-ui.xsd">
    <components>
        <my-template/>  <!-- You can use your own template in the components like this! -->
        <!-- Your main UI components go here -->
    </components>
    <templates>
        <template name="my-template">
            <flow-layout direction="vertical">
                <children>
                    <label>
                        <text>My Text</text>
                    </label>
                    <button id="the-click-me-button">
                        <text>Click me!</text>
                    </button>
                </children>
            </flow-layout>
        </template>
    </templates>
</owo-ui>
```

To use the template in your UI, you need to expand it using the `expandTemplate` method within your screen's `init` method. Here's an example:

```java [Example.java]
public class Example extends BaseUIModelScreen<FlowLayout> {
    public Example() {
        super(FlowLayout.class, new Identifier("your-namespace-here", "your-ui-file-path-here"));
    }

    @Override
    protected void build(FlowLayout rootComponent) {
        // Your regular code
    }

    @Override
    protected void init() {
        super.init();

        if (this.uiAdapter == null) return;

        this.uiAdapter.rootComponent.child(
            this.model.expandTemplate(
                FlowLayout.class,
                "my-template@examples:example_ui",
                Map.of()
            ).childById(ButtonComponent.class, "the-click-me-button")
            .configure(component -> {
                System.out.println("Button clicked!");
            })
        );
    }
}
```

In the `init` method, the `expandTemplate` method is called with the template name (`my-template@examples:example_ui`) and an empty map (`Map.of()`). This expands the template and adds the resulting components to the root component.

After expanding the template, you can access its child components using the `childById` method. In this example, the button component with the ID `the-click-me-button` is retrieved, and a click event handler is configured to print "Button clicked!" when the button is clicked.

Note that accessing components from a template should be done in the `init` method rather than the `build` method because the template components are not available during the build phase.

## Value Replacement in Templates

Templates in owo-ui support value replacement, allowing you to customize the content of the template components when expanding them. You can define placeholders in your template using double curly braces (`{{placeholder}}`) and replace them with actual values when expanding the template.

### Example

```xml [.../my-namespace/owo-ui/example_ui.xml]
<owo-ui xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:noNamespaceSchemaLocation="https://raw.githubusercontent.com/wisp-forest/owo-lib/1.20/owo-ui.xsd">
    <components>
        <!-- Your main UI components go here -->
    </components>
    <templates>
        <template name="my-template">
            <flow-layout direction="vertical">
                <children>
                    <label>
                        <text>{{custom-text}}</text>
                    </label>
                    <button id="the-click-me-button">
                        <text>Click me!</text>
                    </button>
                </children>
            </flow-layout>
        </template>
    </templates>
</owo-ui>
```

In the above example, the label's text is defined as `{{custom-text}}`, which serves as a placeholder that can be replaced with actual text when the template is expanded.

To replace the placeholder values when expanding the template, you need to provide a map of key-value pairs to the `expandTemplate` method. The keys in the map should match the placeholder names, and the corresponding values will be used to replace the placeholders.

```java [Example.java]
@Override
protected void init() {
    super.init();

    if (this.uiAdapter == null) return;

    this.uiAdapter.rootComponent.child(
        this.model.expandTemplate(
            FlowLayout.class,
            "my-template@examples:example_ui",
            Map.of("custom-text", "Hello, World!")
        )
    );
}
```

In the above example, the `expandTemplate` method is called with a map (`Map.of("custom-text", "Hello, World!")`). This replaces the `{{custom-text}}` placeholder in the template with the value "Hello, World!".

By using value replacement in templates, you can create more flexible and reusable components that can be customized based on the specific needs of your UI.
