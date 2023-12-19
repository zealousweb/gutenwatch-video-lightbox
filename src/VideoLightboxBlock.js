const { registerBlockType } = wp.blocks;
const { Button, MediaUpload } = wp.editor;
const { __ } = wp.i18n;
const { RadioControl } = wp.components;

registerBlockType('your-plugin/your-block', {
    title: __('Custom Block with Image Upload'),
    icon: 'smiley',
    category: 'common',
    attributes: {
        image: {
            type: 'string',
            default: null,
        },
        selection: {
            type: 'string',
            default: 'button',
        },
    },
    edit: ({ attributes, setAttributes }) => {
        const onSelectImage = (newImage) => {
            setAttributes({ image: newImage.sizes.full.url });
        };

        const handleSelectionChange = (newSelection) => {
            setAttributes({ selection: newSelection });
        };

        let control = null;

        if (attributes.selection === 'button') {
            control = (
                <Button onClick={() => setAttributes({ selection: 'media' })}>
                    {__('Upload Image')}
                </Button>
            );
        } else if (attributes.selection === 'media') {
            control = (
                <MediaUpload
                    onSelect={onSelectImage}
                    type="image"
                    value={attributes.image}
                    render={({ open }) => (
                        <Button onClick={open}>
                            {__('Select Image')}
                        </Button>
                    )}
                />
            );
        }

        return (
            <div className="custom-block">
                <RadioControl
                    label={__('Select Option')}
                    selected={attributes.selection}
                    options={[
                        { label: __('Button'), value: 'button' },
                        { label: __('Media Upload'), value: 'media' },
                    ]}
                    onChange={handleSelectionChange}
                />
                {control}
                {attributes.image && (
                    <img src={attributes.image} alt="Uploaded" />
                )}
            </div>
        );
    },
    save: ({ attributes }) => {
        return (
            <div>
                {attributes.image && (
                    <img src={attributes.image} alt="Uploaded" />
                )}
            </div>
        );
    },
});
