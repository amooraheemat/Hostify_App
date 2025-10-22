import Feedback from '../modules/feedback.js';
export const addFeedback = async (data) => Feedback.create(data);
export const getFeedback = async () => Feedback.find().sort({ createdAt: -1 });
export const feedbackSummary = async () => {
  const agg = await Feedback.aggregate([{ $group: { _id: null, avg: { $avg: '$rating' }, total: { $sum: 1 } } }]);
  const d = agg[0] || { avg: 0, total: 0 };
  return { average: Number((d.avg || 0).toFixed(2)), total: d.total || 0 };
};
