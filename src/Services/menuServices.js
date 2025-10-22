import Menu from '../modules/menu.js'
export const getMenu = async (filter = {}) => Menu.find(filter).sort({ category: 1, name: 1 });
export const addMenuItem = async (data) => Menu.create(data);
export const updateMenuItem = async (id, data) => Menu.findByIdAndUpdate(id, data, { new: true });
export const deleteMenuItem = async (id) => Menu.findByIdAndDelete(id);
