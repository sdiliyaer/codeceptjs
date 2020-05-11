Feature('jQueryTest');

Scenario('test something', async (I, HomePage, DraggablePage) => {
    I.amOnPage(HomePage.jQueryURL);
    I.seeTitleEquals(HomePage.jqueryTitleText)
    I.click(HomePage.menu.Draggable)
    I.click(DraggablePage.menu.SnapToElementOrGrid)
    let mainWindow = await I.grabCurrentWindowHandle();
    I.switchTo(DraggablePage.iframe);
    I.dragAndDrop(DraggablePage.Locator.draggable, DraggablePage.Locator.snaptarget)
    I.seeTextEquals('Default (snap: true), snaps to all other draggable elements', { xpath: '//div[@id="draggable"]' })
    I.dragAndDrop({ xpath: '//div[@id="draggable2"]' }, { xpath: '//div[@id="snaptarget"]' });
    await I.switchToWindow(mainWindow);
    I.click('Selectable')
    I.switchTo('iframe');
    I.click({ xpath: '//li[text()="Item 2"]' });
    await I.switchToWindow(mainWindow);
    I.click('Selectmenu');
    I.switchTo('iframe');
    I.click({ xpath: '//span[@id="speed-button"]' });
    I.waitForVisible({ xpath: '//ul[@id="speed-menu"]' },2);
    I.click({ xpath: '//div[@id="ui-id-5"]' });
    
    I.click({ xpath: '//span[@id="files-button"]' });
    I.click({xpath: '//div[text()="Some unknown file"]'});
    pause();
});
